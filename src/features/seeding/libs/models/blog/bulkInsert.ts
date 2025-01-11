import { generateIdFromText } from "@/features/blog/richText/utils/generate-id-from-text";
import { blogContents } from "@/features/seeding/blog-contents/blogContents";
import { topicWithTagIdsList } from "@/features/seeding/blog-contents/topicWithTagIdsList";
import prisma from "@/shared/lib/prisma";
import { SkillLevel } from "@prisma/client";

export const bulkInsert = async () => {
  //todo:error not being sent , not able to display on ui
  const topics = await prisma.topic.findMany();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const topicWithTagIds = await Promise.all(
    topics.map(async (topic) => {
      const tagIds = await prisma.tag.findMany({
        where: {
          topicId: topic.id,
        },
        select: {
          id: true,
        },
      });
      return { ...topic, tagIds };
    })
  );

  // console.log(JSON.stringify(topicWithTagIds, null, 2));

  const skillLevels = ["BASIC", "INTERMEDIATE", "ADVANCED"];
  const readTimes = [5, 10, 15, 20, 25]; // Example read times in minutes
  const viewsCount = [10, 50, 100, 150, 200, 500, 1000]; // Example views count

  function getRandomItem<T>(arr:T[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  topicWithTagIdsList.forEach(async (topic, index) => {
    // Randomly generate the read time, views, and skill level
    const {content,description,title}=blogContents[index]
    const randomReadTime = getRandomItem(readTimes);
    const randomViews = getRandomItem(viewsCount);
    const randomSkillLevel = getRandomItem(skillLevels);
    const blog = await prisma.blog.create({
      data: {
        readTimeInMinutes: randomReadTime,
        authorId: "48942f89-e703-4a29-a621-0fc21456211b",
        description: description,
        topicId: topic.id,
        views: randomViews,
        title: title,
        slug: generateIdFromText(title),
        skillLevel: randomSkillLevel as SkillLevel,
        content: {
          create: {
            fullContent: content,
          },
        },
        tags: {
          create: topic.tagIds.map(({id}) => ({
            tagId:id,
          })),
        },
      },
    });
    console.log(`Created blog: ${blog.title}`);
  });
};
