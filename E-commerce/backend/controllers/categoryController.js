import slugify from "slugify";
import CategoryModel from '../models/CategoryModel.js';

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;

        // Check if name is provided
        if (!name) {
            return res.status(401).send({ message: 'Name is required' });
        }

        // Check if the category already exists
        const existingCategory = await CategoryModel.findOne({ name });

        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'Category already exists'
            });
        }

        // Create and save the new category
        const category = await new CategoryModel({ name, slug: slugify(name) }).save();

        res.status(201).send({
            success: true,
            message: 'New category created',
            category
        });
    } catch (error) {
        console.error(error); // Use console.error for error logging
        res.status(500).send({
            success: false,
            error,
            message: 'Error in category'
        });
    }
};


// update category


export const updateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body
        const {id}=req.params
        const category= await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send(
            {
                success:true,
                message:'category Updated Successfully',
                category


            }
        )
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error while updateing category'

        })
    }

}