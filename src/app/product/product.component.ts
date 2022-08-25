import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../Services/recipe-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 // *************************** USE TO CALL API ***********************
uses:any;
constructor(private recipeData:RecipeServiceService, private router:ActivatedRoute)
{
  recipeData.users().subscribe((result)=>{
    // console.warn("data",result);
    this.uses=result;

    
  });
}


utitle="";
udetail="";
updatevalue(Rptitle:any,Rpdetail:any){
this.utitle=Rptitle;
console.log(this.udetail);
this.udetail=Rpdetail;

}

updateContact(contactId:any,Rphoto:any,Rptitle:any,rpdetail:any){
  const newFormData = {id:contactId,photo:Rphoto,Rtitle: Rptitle,Rdetail: rpdetail};

  this.recipeData.updateContact(contactId,newFormData).subscribe(data=>{
    console.log(data)
  });
}


deleteContact(contactId:any){
  this.recipeData.deleteContact(contactId).subscribe(data =>{
    console.log(data);
  });
}


// USE FOR DISPLAY DETAILS
y=""; //y is use for check Rdetail
tz="";//tz is use for check Rtitle
id="";//id is use for check id
photo=""//use for store photo
findData(i:any,img:any,t:any,x:any,){
 this.id=i;
  this.tz=t
  this.y=x;
  this.photo=img;
  console.log(this.id);
}

  ngOnInit(): void {
    // this.recipeData.getCurrentData(this.router.snapshot.params.contactId).subscribe((data)=>{
    //   console.log(data)
    // })
   }

   check(data:string){
    return !(data==='' || data==='');
   }
  
}
