import {mycollections} from "../Models/Rooms.model.js"
export const getRoomDetails = async (req, res)=>{
    try{
        console.log(mycollections);
        const data = await mycollections.find({});
        console.log(data);
        res.status(200).json({
            success : true, 
            data : data
        });
    }
    catch(err)
    {
          res.status(201).json({
            success : false,
            message : 'Error occured while fetching rooms data'
        })
    }
}