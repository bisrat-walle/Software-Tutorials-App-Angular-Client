import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl  = 'http://127.0.0.1:8080/api/v1';

  constructor(private http:HttpClient) { }

  getAllTutorials():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/all');
  }
  
  getTutorial(tutorialId:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/'+tutorialId);
  }

  createTutorial(instructor:string, val:any){
    return this.http.post(this.APIUrl + '/tutorials/myTutorials/'+instructor, val);
  }

  editTutorial(tutorialId:any){
    return this.http.put(this.APIUrl + '/tutorials/myTutorials'+tutorialId, val);
  }

  deleteTutorial(tutorialId:any){
    return this.http.delete(this.APIUrl + '/tutorials/' + tutorialId);
  }

  getEnrolledTutorials(client:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/enrolled/'+client);
  }
  
  getMyTutorials(instructor:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/myTutorials/'+instructor);
  }

  enrollTutorial(client:string, tutorialId:any){
    return this.http.post<any>(this.APIUrl + '/tutorials/enroll/'+client+"/"+tutorialId);
  }

  unenrollTutorial(client:string, tutorialId:any){
    return this.http.delete(this.APIUrl + '/tutorials/enroll/'+client+"/"+tutorialId);
  }

  submitProject(tutorialId:string, client:string, project:any){
    return this.http.post(this.APIUrl + '/tutorials/'+tutorialId+"/"+client, project);
  }

  register(val:any){
    return this.http.post(this.APIUrl + '/register/', val);
  }
  
  login(val:any){
    return this.http.post(this.APIUrl + '/login/', val);
  }

  getProfile():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/profile/');
  }

  updateProfile(val:any){
    return this.http.post(this.APIUrl + '/profile/', val);
  }
  
  getUserRole(){
	return this.http.get(this.APIUrl + 'profile/');
  }
  
  loggedIn(){
	return !!localStorage.getItem('token');
  }
  
  getToken(){
	return localStorage.getItem('token');
  }
	
	
  logout(val:any){
	return this.http.post(this.APIUrl + '/logout/', val);
  }
  
}
