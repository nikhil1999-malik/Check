const request=require('request')

const geocode=(address,callback)=>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibmlraGlsbWFsaWsiLCJhIjoiY2tkendobXB6Mm1idzJ1bnU0YzVvdGU2ZSJ9.uor9rwj3rhEcU0IW2JLsqg'

request({url,json:true},(error,{body})=>{

    if (error){
        callback("Internet connnect problem",undefined)
    }else if(body.message){
        callback("Wrong location is provided",undefined)
    }else{
        callback("",{
            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].text
            
        })
    }
})
}


module.exports=geocode

