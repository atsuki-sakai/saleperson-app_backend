import { Router } from 'express';
import { v1Router } from './v1';

export const router = Router();

// v1のルートを登録
router.use('/v1', v1Router);

// 将来的なv2のルートもここで登録可能
// router.use('/v2', v2Router); 