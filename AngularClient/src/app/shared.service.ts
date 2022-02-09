import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl  = 'http://127.0.0.1:8080';

  constructor(private http:HttpClient) { }

  getAllTutorials():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/all');
  }

  createTutorial(val:any){
    return this.http.post(this.APIUrl + '/tutorials/', val);
  }

  editTutorial(val:any){
    return this.http.put(this.APIUrl + '/tutorials/', val);
  }

  deleteTutorial(val:any){
    return this.http.delete(this.APIUrl + '/student/' + val);
  }

  getEnrolledTutorials():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/enrolled/');
  }
  
  getMyTutorials():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/tutorials/myTutorials/');
  }

  enrollTutorial(id:any){
    return this.http.post<any>(this.APIUrl + '/tutorials/enroll/', id);
  }

  unenrollTutorial(val:any){
    return this.http.post(this.APIUrl + '/tutorials/unenroll/', val);
  }

  submitProject(val:any){
    return this.http.post(this.APIUrl + '/project/submit', val);
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

  updateSchedule(val:any){
    return this.http.put(this.APIUrl + '/schedule/', val);
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
