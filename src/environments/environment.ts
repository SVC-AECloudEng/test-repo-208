// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_API: "https://zadrnbmweb1126.corp.dsarena.com/gatekeeper/api/authentication"
};

export const NOTIFICATION = {
  ITOUCH_API_URL: "https://esb.api.prd.absa.co.za:1001/enterprise/prod/iTouch/v3.0/Submit",
  ITOUCH_CLIENT_ID: "",
  ITOUCH_API_KEY: "",
  ITOUCH_USER_ID: "",
  ITOUCH_USER_PWD: ""
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
