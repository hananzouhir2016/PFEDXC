// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //serverHost: 'http://10.0.2.2:8181/',
  serverHost: 'http://localhost:8181/',
  api: {
    registerAccount: 'api/register',
    authenticate: 'api/authenticate',
    listSquads: 'api/squads',
    listDeals: 'api/deals',
    listClients: 'api/clients',
    listContacts: 'api/contacts',
    listRoles: 'api/roles',
    listPrivileges: 'api/privileges',
    listPays: 'api/pays',
    listWinRates: 'api/win-rates'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
