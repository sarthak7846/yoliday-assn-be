import express, { Router } from "express";
import serverless from "serverless-http";
import cors from "cors";
import { PrismaClient } from "../../generated/prisma";

const router = Router();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

router.get("/", (req, res) => {
  res.send("Server is healthy");
});

router.get("/projects", async (req, res) => {
  // const skip = req.body.skip;
  // const take = req.body.take;

  try {
    const projects = await prisma.projects.findMany();

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/search", async (req, res) => {
  const query = req.body.query;

  if (!query) {
    res.status(400).json({
      message: "Query is invalid",
    });
    return;
  }

  try {
    const projects = await prisma.projects.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
          {
            category: {
              contains: query,
            },
          },
        ],
      },
    });

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/cart", async (req, res) => {
  try {
    const projects = await prisma.projects.findMany({
      where: {
        cart: true,
      },
    });

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-to-cart", async (req, res) => {
  const projectId = req.body.id;
  try {
    await prisma.projects.update({
      where: {
        id: projectId,
      },
      data: {
        cart: true,
      },
    });

    res.status(200).json({
      message: "Added to cart",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/remove-from-cart", async (req, res) => {
  const projectId = req.body.id;
  try {
    await prisma.projects.update({
      where: {
        id: projectId,
      },
      data: {
        cart: false,
      },
    });

    res.status(200).json({
      message: "Removed from cart",
    });
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/", router);

export const handler = serverless(app);
