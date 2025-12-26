import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getPosts } from "@/lib/wordpress";

const trendingTopics = [
  {
    title: "AI Agent",
    description: "探索 AI 智能代理如何自動化複雜工作流程",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Workflow",
    description: "建立高效能的自動化工作流程系統",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Prompt Engineering",
    description: "掌握提示詞工程，讓 AI 生成更精準的內容",
    icon: "✨",
    color: "from-orange-500 to-red-500",
  },
];

export async function AITrendsSection() {
  // 獲取最新的 AI 相關文章
  let recentPosts = [];
  try {
    recentPosts = await getPosts({ per_page: 3 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    // 如果 WordPress API 不可用，使用空陣列
  }

  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">最近 AI 夯什麼？</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              深入探索當前最熱門的 AI 技術趨勢與實際應用案例
            </p>
          </div>
        </div>

        {/* 熱門主題 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="group relative p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>
              <div className="relative">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 最新文章 */}
        {recentPosts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">最新文章</h3>
              <Button asChild variant="ghost">
                <Link href="/posts">
                  查看全部
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <h4
                    className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></h4>
                  <p
                    className="text-sm text-muted-foreground line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 100),
                    }}
                  ></p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <span>閱讀更多</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

