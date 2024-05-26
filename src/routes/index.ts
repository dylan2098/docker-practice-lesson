import { Router } from 'express';
const router = Router();

router.get('/', (req,res) => {
  console.log('APIs start successfully');
  return res.json({
    error: false,
    message: 'Welcome'
  })
})

export default router;