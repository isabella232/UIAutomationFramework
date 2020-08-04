import { YamlParser } from "./YamlParser"

async function main() {
    var parser: YamlParser = new YamlParser();
    parser.RenderTestTemplates();
}

main();