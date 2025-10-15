# Contrats API - Plomberie Renaud Services

## État Actuel (Frontend avec Mock)

### Mock Data Location
- **Fichier**: Frontend - localStorage dans Contact.jsx
- **Données mockées**: Formulaire de contact stocké localement
- **Fonctionnalité**: Le formulaire enregistre les demandes dans localStorage

## API à Implémenter

### 1. POST /api/contact
**Description**: Envoie une demande de contact par email au gérant

**Request Body**:
```json
{
  "nom": "string (required)",
  "email": "string (required, email format)",
  "telephone": "string (required, format français)",
  "objet": "string (required, enum: 'depannage' | 'installation' | 'devis' | 'entretien' | 'autre')",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès",
  "contact_id": "uuid"
}
```

**Erreurs**:
- 400: Données invalides
- 500: Erreur serveur ou échec d'envoi email

### 2. GET /api/contacts (Admin - Optional pour MVP)
**Description**: Liste toutes les demandes de contact (pour admin)

**Response**:
```json
{
  "contacts": [
    {
      "id": "uuid",
      "nom": "string",
      "email": "string",
      "telephone": "string",
      "objet": "string",
      "message": "string",
      "date": "ISO date string",
      "status": "nouveau | traité"
    }
  ]
}
```

## Modèles MongoDB

### Contact Model
```python
{
  "_id": ObjectId,
  "nom": str,
  "email": str,
  "telephone": str,
  "objet": str,
  "message": str,
  "date": datetime,
  "status": str (default: "nouveau"),
  "created_at": datetime,
  "updated_at": datetime
}
```

## Configuration Email

### Variables d'environnement à ajouter (.env backend)
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USERNAME=Tibaut.malik@gmail.com
EMAIL_PASSWORD=[À fournir par l'utilisateur]
EMAIL_FROM=Tibaut.malik@gmail.com
EMAIL_TO=Tibaut.malik@gmail.com
```

### Librairie Python
- Utiliser: `smtplib` (déjà dans Python standard) ou `python-multipart` déjà installé
- Alternative: Ajouter `aiosmtplib` pour async email

## Intégration Frontend-Backend

### Modifications dans Contact.jsx
1. Remplacer localStorage par appel API
2. Endpoint: `${BACKEND_URL}/api/contact`
3. Méthode: POST avec axios
4. Gestion des erreurs avec toast notifications
5. Loading state pendant l'envoi

### Code à modifier
```javascript
// Remplacer la section mock dans handleSubmit:
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
```

## Fonctionnalités Backend

### Email Template
**Sujet**: `[Site Web] Nouvelle demande de ${objet}`

**Corps**:
```
Nouvelle demande depuis le site web Plomberie Renaud Services

Nom: ${nom}
Email: ${email}
Téléphone: ${telephone}
Objet: ${objet}

Message:
${message}

---
Date: ${date}
```

## Tests à Effectuer

1. **Test formulaire**: Envoi d'une demande de contact
2. **Test email**: Vérifier réception d'email
3. **Test validation**: Champs requis et formats
4. **Test erreurs**: Gestion des erreurs serveur
5. **Test MongoDB**: Sauvegarde correcte en base

## Notes Importantes

- ⚠️ **MOCK ACTUEL**: Le formulaire stocke actuellement dans localStorage
- 🔧 **À IMPLÉMENTER**: API POST /api/contact + envoi email
- 📧 **EMAIL**: Configuration SMTP Gmail nécessaire
- 🗄️ **BDD**: Sauvegarder toutes les demandes dans MongoDB
- 🔔 **NOTIFICATIONS**: Email au gérant + sauvegarde BDD
