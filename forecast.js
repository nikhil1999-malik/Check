const request=require('request')


const forecast=(lati,longitude,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=d99268083a6e9f2b385f38f34e0021e2&query='+lati+','+longitude+'&units=m'

    request({url,json:true},(error,response)=>{
        if(error){
            callback("Internet problem is there",undefined)
        }else if(response.body.error){
            callback("Wrong coordinates",undefined)
        }else{
            callback(undefined,{
               Location_weather:response.body.current.weather_descriptions[0]
            })
        }
    })
}



module.exports=forecast