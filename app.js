const express=require('express')
const geocode=require('./geocode')
const forecast=require('./forecast')
const hbs=require('hbs')
const path=require('path')
const { static } = require('express')






const app=express()


const DirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'./templates/views')
const PartailHBS=path.join(__dirname,'../templates/partial')
app.set('view engine', 'hbs')
app.set('views',viewsPath)



app.use(express.static(DirectoryPath))
hbs.registerPartials(PartailHBS)

console.log(PartailHBS)







app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Nikhil'
    })
})
app.get('/help',(req,res)=>{
    res.render('help')
})






geocode('Delhi',(error,{latitude,longitude,location})=>{
    if(error)
    {
        console.log(error)
    }else{
        forecast(latitude,longitude,(error,weather)=>{

           if(error){
               console.log(error)
           }else{
            console.log(weather)
            console.log(latitude,longitude)
            console.log(location)
           }
            
        
    })
    }

    
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})