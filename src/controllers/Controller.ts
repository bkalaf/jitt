import { Response, Request } from 'express';
import { IService } from '../services/mongoService';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

export class Controller<
    T extends Record<string, any> & { _id: ObjectId },
    TMemory extends z.ZodType,
    TDatabase extends z.ZodType
> {
    service: IService<T, TMemory, TDatabase>;
    constructor(service: IService<T, TMemory, TDatabase>) {
        this.service = service;
    }
    async getAllRecords(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.service.getAll();
            res.status(200).json(result);
        } catch (error) {
            console.error((error as Error).message);
            res.status(500).json({
                title: `Error on FETCH ALL.`,
                message: (error as Error)?.message,
                name: (error as Error)?.name,
                stack: (error as Error)?.stack
            });
        }
    }
    async getById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        try {
            const result = await this.service.getById(id);
            if (result == null) {
                res.status(404).json({ message: 'Not Found' });
            } else {
                res.status(200).json(result);
            }
        } catch (error) {
            console.error((error as Error).message);
            res.status(500).json({
                title: `Error FINDING SINGLE record.`,
                message: (error as Error)?.message,
                name: (error as Error)?.name,
                stack: (error as Error)?.stack
            });
        }
    }
    async createRecord(req: Request, res: Response): Promise<void> {
        console.log(`createRecord: request`, req.body);
        try {
            const data: T = await req.body
            const record = this.service.insertRecord(data);
            res.status(201).json(record);
        } catch (error) {
            console.error((error as Error).message);
            res.status(500).json({
                title: 'Error INSERTING record.',
                message: (error as Error)?.message,
                name: (error as Error)?.name,
                stack: (error as Error)?.stack
            });
        }
    }

    async updateRecord(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        try {
            const data: T = req.body;
            const updatedItem = await this.service.updateRecord(id, data);
            if (updatedItem) {
                res.status(200).json(updatedItem);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            console.error(`Error updating item with ID ${id}:`, error);
            res.status(500).json({
                title: `Error UPDATING record with id: ${id}.`,
                message: (error as Error)?.message,
                name: (error as Error)?.name,
                stack: (error as Error)?.stack
            });
        }
    }

    async deleteRecord(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        try {
            const success = await this.service.deleteRecord(id);
            if (success) {
                res.status(204).send(); // No content on successful deletion
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            console.error(`Error deleting item with ID ${id}:`, error);
            res.status(500).json({
                title: `Error DELETING record with id: ${id}.`,
                message: (error as Error)?.message,
                name: (error as Error)?.name,
                stack: (error as Error)?.stack
            });
        }
    }
}
