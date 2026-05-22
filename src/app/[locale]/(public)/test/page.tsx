import {
    createArticle,
    getAllArticles,
} from "@/features/articles/services/articles.services";


export default async function TestPage() {
    const articles = await getAllArticles();

    return (
        <div>
            <h1>Articles</h1>

            <pre>
                {JSON.stringify(articles, null, 2)}
            </pre>
        </div>
    );
}