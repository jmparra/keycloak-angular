import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'CHANGE-URL', // .ie: http://localhost:8080/auth/
            realm: 'CHANGE-REALM', // .ie: master
            clientId: 'CHANGE-CLIENT-ID' // .ie: account
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          }
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
