import { Router } from 'express';

export interface Route {
  createRoute(): Router
}
