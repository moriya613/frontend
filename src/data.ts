import { Item } from "./app/shared/models/Item";

export const sample_items: Item[] = [
    {
      id:'1',
      name: 'לוח ה100',
      price: 10,
      favorite: false,
      uses: 4,
      imageUrl: 'assets/100Board.png',
      tags: ['חשבון', 'מתמטיקה'],
      width: 5,
      length: 5
    },
    {
      id:'2',
      name: 'אלול',
      price: 20,
      favorite: true,
      uses: 7,
      imageUrl: 'assets/Elul.png',
      tags: ['חגים', 'תשרי'],
      width: 5,
      length: 5
    },
    {
      id:'3',
      name: 'אותיות',
      price: 5,
      favorite: false,
      uses: 3,
      imageUrl: 'assets/letters.png',
      tags: ['אותיות', 'כיתה א'],
      width: 5,
      length: 5
    },
    {
      id:'4',
      name: 'מה בקלמר',
      price: 2,
      favorite: true,
      uses: 3,
      imageUrl: 'assets/MaBakalmar.png',
      tags: ['כיתה א'],
      width: 5,
      length: 5
    },
    {
      id:'5',
      name: 'כותרת חשבון',
      price: 11,
      favorite: false,
      uses: 0,
      imageUrl: 'assets/MathTitle.png',
      tags: ['חשבון', 'מתמטיקה'],
      width: 5,
      length: 5
    },
    {
      id:'6',
      name: 'תוצרי כתיבה',
      price: 9,
      favorite: false,
      uses: 4,
      imageUrl: 'assets/WriteProdct.png',
      tags: ['עברית', 'שפה'],
      width: 5,
      length: 5
    },
  ]