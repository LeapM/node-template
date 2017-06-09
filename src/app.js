import express from 'express'
import dotenv from 'dotenv'
//make regenerratorruntime globally defined
import "regenerator-runtime/runtime";

dotenv.config();
const app = express();
const port = process.env.port || 4000;
//for cross origin scripting
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
//add body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', (req, res) => res.send('hello world'));

app.listen(port, () => {
	console.log(`listen on localhost:${port}`);
})