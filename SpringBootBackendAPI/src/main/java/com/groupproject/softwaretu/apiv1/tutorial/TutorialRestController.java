package com.groupproject.softwaretu.apiv1.tutorial;

import com.groupproject.softwaretu.tutorial.TutorialRepository;
import com.groupproject.softwaretu.tutorial.TutorialService;
import com.groupproject.softwaretu.tutorial.Tutorial;

import java.time.LocalDateTime;

import com.groupproject.softwaretu.enrollement.Enrollement;
import com.groupproject.softwaretu.enrollement.EnrollementRepository;
import com.groupproject.softwaretu.project.ProjectRepository;
import com.groupproject.softwaretu.security.User;
import com.groupproject.softwaretu.security.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@RequestMapping(path="api/v1/tutorials", produces="application/json")
@CrossOrigin(origins = "*")
public class TutorialRestController {
    
    
    @Autowired
    private TutorialRepository tutorialRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EnrollementRepository enrollementRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private TutorialService tutorialService;

    @GetMapping("/all")
    public ResponseEntity<Iterable<Tutorial>> getAllTutorials(){
        return new ResponseEntity<>(tutorialRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/enrolled/{username}")
    public ResponseEntity<Iterable<Tutorial>> getEnrolledTutorials(@PathVariable("username") String username){
        return new ResponseEntity<>(
            enrollementRepository.getEnrolledTutorials(userRepository.findByUsername(username)), HttpStatus.OK);
    }

    @PostMapping("/enroll/{username}/{tutorialId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void enroll( 
                        @PathVariable("tutorialId") Long tutorialId,
                        @PathVariable("username") String username
                        ) {

        
        Enrollement newEnrollement = new Enrollement();
        newEnrollement.setEnrolledAt(LocalDateTime.now());

        Tutorial tutorial= tutorialRepository.findByTutorialId(tutorialId);
        User client = userRepository.findByUsername(username);
        newEnrollement.setClient(client);
        newEnrollement.setTutorial(tutorial);
        enrollementRepository.save(newEnrollement);
    }

    @DeleteMapping("/enrolled/{username}/{tutorialId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unenrollTutorial(@PathVariable("username") String username, 
                                @PathVariable ("tutorialId") Long tutorialId){
        Tutorial tutorial = tutorialRepository.findByTutorialId(tutorialId);
        Enrollement enrollement = enrollementRepository.getEnrollementFromClientAndTutorial(
            userRepository.findByUsername(username), tutorial);
        try{
            enrollementRepository.delete(enrollement);
        } catch (EmptyResultDataAccessException e){}
    }

    @GetMapping("/mytutorials/{username}")
    public ResponseEntity<Iterable<Tutorial>> getMyTutorials(@PathVariable("username") String username){
        return new ResponseEntity<>(
            tutorialRepository.getInstructorTutorials(userRepository.findByUsername(username)), HttpStatus.OK);
    }

    @PostMapping(path="/mytutorials/{username}", consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Tutorial createTutorial(@RequestBody Tutorial tutorial, @PathVariable("username") String username){
        if (tutorial.getProject() != null){
            projectRepository.save(tutorial.getProject());
        }
        tutorial.setInstructor(userRepository.findByUsername(username));
        return tutorialRepository.save(tutorial);
    }


    @PutMapping(path="/{tutorialId}", consumes="application/json")
    @ResponseStatus(HttpStatus.OK)
    public Tutorial updateTutorial(@PathVariable ("tutorialId") Long tutorialId,
        @RequestBody Tutorial tutorial
    ){
        tutorial.setTutorialId(tutorialId);
        return tutorialRepository.save(tutorial);
    }

    @PatchMapping(path="/{tutorialId}", consumes="application/json")
    @ResponseStatus(HttpStatus.OK)
    public Tutorial partialUpdateTutorial(@PathVariable ("tutorialId") Long tutorialId,
        @RequestBody Tutorial patch
    )
    {
        Tutorial tutorial = tutorialRepository.findByTutorialId(tutorialId);
        if (patch.getTitle() != null){
            tutorial.setTitle(patch.getTitle());
        }
        if (patch.getContent() != null){
            tutorial.setTitle(patch.getTitle());
        }
        return tutorialRepository.save(tutorial);
    }

    @DeleteMapping(path="/{tutorialId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTutorial(@PathVariable ("tutorialId") Long tutorialId){
        tutorialService.deleteTutorialCascadeProject(tutorialId);
    }


    @GetMapping("/{tutorialId}")
    public ResponseEntity<Tutorial> getTutorialDetailsById(@PathVariable("tutorialId") Long tutorialId){
        return new ResponseEntity<>(tutorialRepository.findByTutorialId(tutorialId), HttpStatus.OK);
    }

    @PostMapping("/{tutorialId}/{username}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void submitProject(
                    @PathVariable("tutorialId") Long tutorialId, 
                    @PathVariable("username") String username,
                    @RequestBody ProjectSubmission project){
        

        Enrollement enrollement = enrollementRepository.
                    getEnrollementFromClientAndTutorial(
                    userRepository.findByUsername(username),
                     tutorialRepository.findByTutorialId(tutorialId));
        
        enrollement.setGithubLink(project.projectUrl);
        enrollementRepository.save(enrollement);
    }

    

}
