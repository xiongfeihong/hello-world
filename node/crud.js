// crud
// Create增加 Retrieve检索 Update更新 Delete删除
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var accessLog = fs.createWriteStream('./access.log', { flags: 'a' });
var errorLog = fs.createWriteStream('./error.log', { flags: 'a' });

app.use(morgan('combined', { stream: accessLog }));		//打印到log日志

// 数据库操作
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    // useFindAndModify: true,
    // useCreateIndex: true
}, (err) => {
    console.log(err);
});
// 定义数据模型
const ArticleModel = mongoose.model('Article', mongoose.Schema({
    title: { type: String },
    body: { type: String }
}));

app.get('/', async (req, res) => {
    res.send('index');
});

/*
    【增】创建一条数据 create
    【查】查找所有数据 find
    【删】通过_id查找并删除 findByIdAndDelete 
    【查】通过_id查找一条数据 findById
    【改】通过_id查找并修改 findByIdAndUpdate
*/
// 新增文章
app.post('/api/articles', async (req, res) => {
    const article = await ArticleModel.create(req.body);
    console.log(article);
    res.send(article);
    /*
        注意点：新增成功返回对应的对象 {}
        {
            "title": "标题2",
            "body": "文章主题内容2",
            "_id": "6258ba644681625823957bfe",
            "__v": 0
        }
    */
});
// 查询文章列表
app.get('/api/articles', async (req, res) => {
    const article = await ArticleModel.find();
    console.log(article);
    res.send(article);
    /*
        注意点：查询成功返回 [{},{}]，即使没有查找到数据也会返回空数组 [] 切记
        [
            {
                "_id": "6258aacef75af6ccbeecf3c9",
                "title": "标题",
                "body": "文章主题内容",
                "__v": 0
            }
        ]
    */
});
// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    // res.send({
    //     status: true
    // });
    /*
        注意点：删除成功返回被删除的对象{...} 没有删除返回null
        {
            "_id": "6258ac4ec61cf549d8c06e2c",
            "title": "标题3363",
            "body": "文章主题内容333",
            "__v": 0
        }
     */
    console.log(article);
    res.send(article);
});
// 查询文章详情
app.get('/api/articles/:id', async (req, res) => {
    const article = await ArticleModel.findById(req.params.id);
    console.log(article);
    res.send(article);
    /*
        注意点：通过 _id 查询文章详情成功返回对应的对象 {}
        {
            "_id": "6258ac4ec61cf549d8c06e2c",
            "title": "标题3",
            "body": "文章主题内容3",
            "__v": 0
        }
    */
});
// 修改文章
app.put('/api/articles/:id', async (req, res) => {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body);
    // res.send({
    //     status: true
    // });
    /*
    注意点：通过 _id 修改文章成功返回之前被修改的对象 {}
    {
        "_id": "6258aacef75af6ccbeecf3c9",
        "title": "标题111",
        "body": "文章主题内容111",
        "__v": 0
    }
    */
   console.log(article);
   res.send(article);
});

//start app 
const port = process.env.PORT || 3001;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);
