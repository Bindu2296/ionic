import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  array1 = [];
  constructor() {
    this.array1 = [];
 }

 loadarray(firstname, place, profession, picture) {
   console.log('loadarray called');
   console.log('array1:', this.array1);
   let mypic = (localStorage.getItem("mypic"));

   const newarr = {
     'firstname': firstname,
     'place': place,
     'profession': profession,
     'picture': picture
    //  'picture': mypic
   };
   console.log(newarr);
   this.array1.push(newarr);

   return this.array1;
 }

pushIntoUsers(arr) {
  console.log('arrray1 : ', this.array1);
  console.log('array1 length :' , this.array1.length);
  console.log(this.array1.length  == 0);
  console.log(this.array1.length  !== 0);
  console.log(this.array1.length  != 0);
  console.log(this.array1[0]);
  if (this.array1.length  !== 0) {
// tslint:disable-next-line: prefer-for-of
for (let i = 0; i < this.array1.length; i++) {
    console.log(this.array1[i]);

    const newArray = {
      color1: 'success',
      name1: 'thumbs-up',
 // tslint:disable-next-line: max-line-length
 // "userimg":"data:image/jpeg;base64,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",
  //  'userimage': this.array1[i]['picture'],
      userimg: 'data:image/jpeg;base64,' + this.array1[i].picture,
      name: (this.array1[i].firstname),
      label2: (this.array1[i].place),
      label3: (this.array1[i].profession),
      name2: 'flag',
      name3: 'briefcase',
      name4: 'checkbox',
      color2: 'medium'
  };
    arr.push(newArray);
}


console.log(arr);
return arr;
}
}



//   filterItems(searchItem,item) {
//     return item.filter(i => {
//       return i.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1;
//     });
//   }
}
