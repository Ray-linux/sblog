import Comment from "../model/comment.js";

export const newComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    comment.save();
    res.status(200).json({msg: 'comment saved'})
  } catch (e) {
    // return res.status(500).json({error: e.message})
    return res.status(500).json(e);
  }
};



// export const getComments = async(req, res) => {
//     try{
//         const comments = await Comment.find({postId: req.params.id});
//         return res.status(200).status.json(comments)
//     }catch(e){
//         return res.status(500).json(e);
//     }
// }

export const getComments = async (request, response) => {
  try {
      const comments = await Comment.find({ postId: request.params.id });
      
      response.status(200).json(comments);
  } catch (error) {
      response.status(500).json(error)
  }
}