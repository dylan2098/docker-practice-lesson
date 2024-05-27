import * as redis from 'redis';
import { Router } from 'express';

const router = Router();

router.get('/', async (req,res) => {

    const client = redis.createClient({
      url: process.env.REDIS_URL
    });

    client.on("error", function (error) {
        console.error("Redis connect error", error);
    });

    client.on("connect", function () {
        console.info("Redis connected successfully!");
    });


    await client.connect();

    console.log('APIs start successfully');

  return res.json({
    error: false,
    message: 'Welcome'
  })
})

export default router;