import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { RecipeServiceService } from './Services/recipe-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';


// *************************** USE TO CALL API ***********************

uses:any;
constructor(private recipeData:RecipeServiceService)
{
  recipeData.users().subscribe((result)=>{
    // console.warn("data",result);
    this.uses=result;
  });
}


















// *************************** END OF CALL API ***********************

// ******************************* USE TO POST DATA TO JSON SERVER USING API ***************
getUserData(data:any){
  
  const imagename =data.photo.split( "\\",-1);
  
  data.photo=imagename[imagename.length-1];
  console.log(data.photo);
  this.recipeData.saveUser(data).subscribe((result)=>{
    console.warn(result);

 })
}
// ********************************END OF POST API ************************



}
