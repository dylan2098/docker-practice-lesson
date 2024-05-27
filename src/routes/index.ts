import * as redis from 'redis';
import { Router } from 'express';

const router = Router();

router.get('/', async (req,res) => {
  console.log('APIs start successfully');

    const client = redis.createClient();

    console.log('call redis client');

    client.on("error", function (error) {
        console.error("Redis connect error", error);
    });

    client.on("connect", function () {
        console.info("Redis connected successfully!");
    });


    await client.connect();

  return res.json({
    error: false,
    message: 'Welcome'
  })
})

export default router;