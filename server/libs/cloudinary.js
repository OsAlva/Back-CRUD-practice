import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dr0kvqrk0",
    api_key: "268197355826219",
    api_secret: "JCK-2UE3D9DYrWI8BGb_Rp-xOdc",
})

export const  uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

//eliminamos de cloudinary
export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}