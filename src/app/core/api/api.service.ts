import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`, {
      headers: this.headers,
      params
    });
  }

  post(url: string, data: object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers
    });
  }

  put(url: string, data: object = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${url}`, JSON.stringify(data), {
      headers: this.headers
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${url}`, {
      headers: this.headers
    });
  }
}

export const PATH = {
  // User Management
  POST_LOGIN: '/verifyuser',
  POST_CREATE_USER: '/createuser',
  GET_USER: (userid) => `/getuser/${userid}`,
  PUT_UPDATE_USER: (userid) => `/updateuserdata/${userid}`,
  POST_FORGOT_PASSWORD: '/forgotpassword',

  GET_USER_LIST: '/user-management/users/',
  PUT_USER_STATUS: (userId) => `/user-management/users/${userId}/status`,
  DELETE_USER: (userId) => `/user-management/users/${userId}/delete`,
  POST_RESET_PASSWORD: '/user-management/resetpassword',
  POST_REFRESH_TOKEN: '/user-management/refresh-token',

  // Buy-List-Management
  GET_BUY_LIST: (userid) => `/getbuylistitems/${userid}`,
  POST_BUY_LIST: (userid) => `/addtolist/${userid}`,

  GET_ORGANISATION_BY_ID: (nodeId) => `/node-management/node/${nodeId}`,
  GET_NODE_THEME: (domain) => `/node-management/organization/${domain}/theme`,
  POST_CREATE_NODE: '/node-management/node',
  POST_CREATE_ORGANIZATION: '/node-management/node',
  GET_NODE_CONFIG_BY_ID: (nodeId) => `/node-management/node/${nodeId}/configuration`,
  GET_NODE_BY_ID: (nodeId, status = true) => `/node-management/node/${nodeId}?status=${status}`,
  // Notification Management
  NOTIFICATION: '/notfication',
  // Common Management
  UPLOAD_PROFILE_PHOTO: '/common/uploadfile',
  GET_COUNTRIES: '/common/countries',
  GET_LANGUAGES: '/common/language',
  GET_SHORT_DATETIME_FORMATS: '/common/short-date-time',
  GET_PURGE: '/common/purge',
  GET_TIMEZONES: '/common/timezones',
  GET_LONG_DATE_TIME_FORMATS: '/common/long-date-time',
  GET_CURRENCIES: '/common/currency',
  GET_THEMES: '/common/themes',
  GET_ALL_MODULE: '/common/module',
  // AM Config Management
  GET_AM_ACCESS_RIGHTS: '/am-config/access-rights',
  // TM Config Management
  GET_TM_ACCESS_RIGHTS: '/tm-config/access-rights',
  // Role Management
  GET_MODULES_BY_ROLE: (roleName) => `/role-management/roles/modules/${roleName}`,
  POST_CREATE_ROLE: '/role-management/roles',
  GET_ROLE_LIST: '/role-management/roles',
  PUT_ROLE: (roleId) => `/role-management/roles/${roleId}`,
  PUT_UPDATE_ROLE_STATUS: (roleId) => `/role-management/roles/${roleId}/status`,
  DELETE_ROLE: (roleId) => `/role-management/roles/${roleId}`,
  // Transaction Management
  GET_REASON_CATEGORY: '/transaction-management/reasons/category',
  GET_TENDER_TYPE: '/transaction-management/tender/type'
};
