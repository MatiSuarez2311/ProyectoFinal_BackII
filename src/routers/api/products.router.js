import { Router } from "express";

const productsRouter = Router();

const create = () => {};
const readAll = () => {};
const readById = () => {};
const updateById = () => {};
const destroyById = () => {};

productsRouter.post("/", create);
productsRouter.get("/", readAll);
productsRouter.get("/:uid", readById);
productsRouter.put("/:uid", updateById);
productsRouter.delete("/:uid", destroyById);

export default productsRouter;
