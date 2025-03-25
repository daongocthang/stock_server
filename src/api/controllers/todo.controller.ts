import { Request, Response } from "express";
import { developing } from "../../db/config";
import TodoService, { IndexError } from "../../db/services/todo.service";
import { BadRequestError } from "../../middlewares/error.middleware";

export default class TodoController {
  public static fake = async (req: Request, res: Response) => {
    if (!developing) throw new BadRequestError("404 Not Found");

    const count = parseInt(req.query.c as string);
    if (isNaN(count)) throw new Error();

    const payload: Array<any> = [];
    for (let i = 0; i < count; i++) {
      payload.push(TodoService.fake());
    }
    const results = await TodoService.bulkCreate(payload);
    return res.send(results);
  };
  public static create = async (req: Request, res: Response) => {
    const body = req.body;

    if (!body) {
      throw new BadRequestError("Todo not found");
    }

    const todo = await TodoService.create(body);
    return res.status(200).send(todo);
  };
  public static getAll = async (req: Request, res: Response) => {
    return res.status(200).send(await TodoService.getAll());
  };

  public static getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      IndexError.raise();
    }

    const todo = await TodoService.getById(id);
    return res.status(200).send(todo);
  };

  public static update = async (req: Request, res: Response) => {
    const todoId = parseInt(req.params.id);
    if (isNaN(todoId)) {
      IndexError.raise();
    }

    const body = req.body;

    if (!body) {
      throw new BadRequestError("Todo not found");
    }
    const { id, ...values } = body;
    await TodoService.update(todoId, values);

    return res.status(200).send({ message: "OK" });
  };
  public static delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      IndexError.raise();
    }

    return res.status(200).send({ resultOK: await TodoService.delete(id) });
  };
}
