const db = require('./../../config/db');
const Articles = db.Articles;
// getArticle
// addArticle
// getAll
// clapArticle
// commentArticle

class ArticleController {


    /**
     * getAll articles
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getArticles(req, res, next) {
        try {
            Articles.find({},(err, articles)=>{
                if (!articles) {
                    res.status(400).json({ message: 'User not found.' });
                } else {
                   res.status(200).json({
                    success: true,
                    count: articles.length,
                    data: articles
                   });
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * get single article
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getArticle(req, res, next) {
        try {
            Articles.find({_id:req.params.id},(err, article)=>{
                if (!article) {
                    res.status(400).json({ message: 'User not found.' });
                } else {
                   res.status(200).json({
                    success: true,
                    count: article.length,
                    data: article
                   });
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ArticleController();