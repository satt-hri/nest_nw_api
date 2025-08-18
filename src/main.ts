import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  
  app.use((req,res,next) => {
    console.log('Global middleware: Request received');
    // You can add more global middleware logic here if needed
    next();
  }); // This is a placeholder for any global middleware you might want to add

  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}`);
  });
}
bootstrap();
