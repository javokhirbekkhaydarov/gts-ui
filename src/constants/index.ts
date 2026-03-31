import { IItem } from "@/types/ui"
import { IUser } from "@/types/user"

export const user: IUser = {
  "uid": "f7ecb380-f55d-4d4c-a649-a472bc9ede53",
  "is_full_signed": true,
  "is_demo": true,
  "type_cabinet_code": "B",
  "type_cabinet": "BUSINESS",
  "user_type_code": "O",
  "user_type": "AGENT",
  "status_code": "A",
  "status": "Active",
  "username": "",
  "email": "mamatov.umar@mail.ru",
  "currency": {
    "code": "USD",
    "name": "Доллары США"
  },
  "language": {
    "name": "Russian",
    "iso_code": "ru",
    "iso_code_2": "rus"
  },
  "is_employee": false,
  "two_factory": false,
  "type_factory": null,
  "white_list": [],
  "is_single": false,
  "is_learn": true,
  "created_at": "2024-11-19T06:21:27.067440Z",
  "company_info": {
    "entity_type": "legal",
    "name": "sdfsdf",
    "name_int": null,
    "email": "mamatov.umar@mail.ru",
    "phone": {
      "phone_code": "998",
      "phone_number": "975755151"
    },
    "country": {
      "code": "UZ",
      "emoji": "🇺🇿",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
      "unicode": "U+1F1FA U+1F1FF",
      "phone_code": 998,
      "phone_mask": "(##) ###-##-##",
      "country_eng": "Uzbekistan",
      "country_rus": "Узбекистан",
      "country_uzb": "Узбекистан"
    },
    "city": {
      "name": "Samarqand Region",
      "state_name": "Samarqand Region",
      "country_name": "Uzbekistan"
    },
    "address": "Dasdasdf",
    "postcode": null,
    "stir_number": "23423423",
    "kpp_number": null,
    "orgn_number": null,
    "director_name": null,
    "phys_country": null,
    "phys_city": null,
    "phys_address": null,
    "phys_postcode": null,
    "website": null,
    "additional_email": null,
    "additional_phone": null
  },
  "bank_details": {
    "name": "Anor",
    "bic_id": null,
    "receiver_invoice": null,
    "correspondent_account": null,
    "mfo_number": "12312312323",
    "okpo_number": null,
    "accountable": null
  },
  "physical_data": {},
  "contacts": [
    {
      "role": "Директор",
      "email": "mamatov.umar@mail.ru",
      "phone": {
        "phone_code": "998",
        "phone_number": "9757513216"
      },
      "full_name": "Mamatov Umar",
      "social_contact": null,
      "additional_emails": null
    }
  ],
  "profile_image": "/media/documents/01cc497aa78948558fca18413df7655b.png",
  "staff": {
    "firstname": "Олимбек",
    "lastname": "Мухиддинов",
    "patronymic": "",
    "birthday": null,
    "passport_type": "NP",
    "passport_number": "212212",
    "passport_pinfl": "",
    "passport_expired": null,
    "passport_issue": null,
    "country": {
      "code": "UZ",
      "emoji": "🇺🇿",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
      "phone_code": 998,
      "phone_mask": "(##) ###-##-##",
      "country_eng": "Uzbekistan",
      "country_rus": "Узбекистан",
      "country_uzb": "Узбекистан",
      "unicode": "U+1F1FA U+1F1FF"
    },
    "city": {
      "name": "Andijan Region",
      "state_name": "Andijan Region",
      "country_name": "Uzbekistan"
    },
    "address": "Али Кушчи 18/9",
    "postcode": null,
    "phone": {
      "phone_code": "998",
      "phone_number": "993797733"
    },
    "additional_phone": {
      "phone_code": "998",
      "phone_number": "993797733"
    },
    "additional_email": "olim@gmail.com",
    "gender": null,
    "role": {
      "uuid": "c9e1b72a-9b21-449a-af31-14229f0bbaf6",
      "name": "Руководитель системы"
    }
  },
}

export const links: IItem[] = [
  {
    label: 'Личные данные',
    value: '/personal-account',
    icon: 'icon-Outline-Profile'
  },
  {
    label: 'Пароль',
    value: '/personal-account?tab=password',
    icon: 'icon-Outline-Password'
  }
]
