# Rating Component
### This Package allows you to have a rating a component in your project.
## Note
    You have to install python in your local to use this package.
    Or 
    Please note that the official [Node.js for Windows installer](https://nodejs.org/en/download) can now automatically install the required tools. 
# Steps to do :
<ol>
<li>npm i https://github.com/Kaavian-Systems-Pvt-Ltd/ratingcomponent.git</li>
<li>npm i react-icons-kit</li>
<li> require the package as given below</li>
## Usage
 
```
 import Rate from '@kaavian-sys/ratingcomponent'



const [X, setX] = useState(0);

 const App () = {
   return(  
      <div>  
       <Rate rating={X} icon={any icon react-icons-kit } size={50}  onRating={(rate) => setX(rate)} />
      </div>
 )};
 ```

| Name  | Required | Description | Default |
| ---   | -------- | ----------- | ------- | 
| rating  | required | It is used to store the rated value|         |
| Onrating| required | It is used to return the changes in rating value | |
| icon | optional | Icon in which rating component needed | star icon ⭐ |
| filled| optional |Color in which selected icons should be displayed | Yellow |
| unfilled | optional |Color in which unselected icons should be displayed | Grey |
| count | optional | No of icons needed in rating component | 5⭐ |
| size | optional | size in which the icon should be displayed | 20 |
