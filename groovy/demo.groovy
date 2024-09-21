@Grab(group='com.squareup.okhttp3', module='okhttp', version='4.9.3')
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response
import groovy.json.JsonSlurper


OkHttpClient client = new OkHttpClient()

Response response = client.newCall(new Request.Builder()
        .url("https://jsonplaceholder.typicode.com/posts")
        .build())
    .execute()

def content = response.body().string()
response.close()


def data = new JsonSlurper().parseText(content)

println(data[0].title)

data.stream().limit(5).eachWithIndex { it, idx ->
    new File("out_${idx}.txt").withWriterAppend('UTF-8') { writer ->
        writer.writeLine("Title: ${it.title}")
    }
}
