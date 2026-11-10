Voici une fonction TypeScript isolée pour valider une adresse email en utilisant une expression régulière standard (RFC 5322 adaptée pour le web) :

```typescript
// regex pour valider une adresse email basique
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Valide une adresse email
 * @param email - L'adresse email à valider
 * @returns true si l'email est valide, false sinon
 */
function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

// Exemple d'utilisation :
console.log(isValidEmail("user@example.com"));    // true
console.log(isValidEmail("invalid-email"));      // false
console.log(isValidEmail(""));                   // false
console.log(isValidEmail("john.doe+spam@domain.org")); // true (si on accepte +)
```

### Notes importantes :
- **Sécurité** : Cette fonction est adaptée pour une validation basique. Pour des besoins plus avancés (ex. : vérification du domaine, SPF, DKIM, etc.), il faut utiliser des bibliothèques comme [`validator.js`](https://github.com/validatorjs/validator.js) ou des outils comme [Zod](https://zod.dev/) ou [Joi](https://joi.dev/).
- **RFC 5322** : L'expression régulière ci-dessus est une version simplifiée mais fonctionnelle pour la plupart des cas courants.
- **Unicode** : Si vous souhaitez valider des emails avec des caractères Unicode (ex. : `café@domain.com`), il faut adapter l'expression régulière ou utiliser une bibliothèque plus avancée.

Souhaites-tu une version avec des tests unitaires ou une intégration avec un framework comme React ou Angular ?