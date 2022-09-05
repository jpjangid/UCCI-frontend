import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HTTPApi } from './httpapi.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HTTPApi) {

  }
  // **********************************************Authentication API's *****************************************
  // user register api
  register(data: any): Observable<any> {
    return this.http.post('register', data);
  }
  // user login api
  login(url: any): Observable<any> {
    return this.http.post('login', url);
  }
  // logout user api
  logoutUser() {
    return this.http.post('logout');
  }


  // *******************************************************Services API's***************************************
  // ___________________________________________________________DOCUMENT ATTESTATION_________________________________________________________________

  // add document attestation service form api
  addDocumentAttestation(formData: any) {
    return this.http.post('addDocument', formData);
  }
  // get document attestation list 
  getDocumentAttestationList() {
    return this.http.get('getDocument');
  }
  // verify document attestation
  verifyDocumentAttestation(token: any, id: any): Observable<any> {
    return this.http.put('verifyingDoc/' + token + '/' + id)
  }
  // pay for document attestation
  payDocumentAttestationFee(token: any, id: any) {
    return this.http.post('payDoc/' + token + '/' + id)
  }

  // ________________________________________________________________CERTIFICATE OF ORIGIN __________________________________________________
  // add certificate of origin service
  addCertificateOfOrigin(data: any): Observable<any> {
    return this.http.post('addCoo', data);
  }
  // get certificate of origin member list
  getCertificateofOriginList() {
    return this.http.get('getCoo');
  }
  // verify certificate of origin member
  verifycertificate(id: any): Observable<any> {
    return this.http.put('verifyingCoo/' + id);
  }
  // payment api for certificate of origin
  paymentCertificateOrigin(paytoken: any) {
    return this.http.post('payCoo', paytoken)
  }

  // ***********************************************call members API's ************************************
  // get member list of contact api
  getMemberList() {
    return this.http.get('call-member')
  }
  // filter list finction 
  getAllFilters(name: any, id: any) {
    return this.http.get('filter/' + name + '/' + id)
  }


  // ********************************************All Members API's ******************************************************
  // member turnover dropdown api
  getTurnoverData() {
    return this.http.get('turnover')
  }
  // member turnover dropdown api
  getNationalityDropdownValue() {
    let dropdownValue : any = {data:[{value:"Indian"},{value:"NRI"},{value:"Non Indian"}]}
    return dropdownValue;
  }
  // member classfication dropdown api
  getMemberClassfication() {
    return this.http.get('member-classification')
  }
  // member category dropdown api
  getMemberCategory() {
    return this.http.get('member-category')
  }
  // regular member api
  regularMemberRegister(data: any): Observable<any> {
    return this.http.post('regular-members', data);
  }
  // get regular member list
  getregularMemberList() {
    return this.http.get('regular-members');
  }

  //HWM membership registration
  hwmRegistration(formData:any) {
    return this.http.post('hwm',formData);
  }
  // get hwm member list
  getHwmMemberList() {
    return this.http.get('hwm');
  }

}