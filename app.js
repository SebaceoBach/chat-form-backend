import express from "express";
import path from "path";

const app = express();


app.set("port", process.env.PORT || 3000);

export default app;