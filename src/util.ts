import * as vscode from "vscode";
import { ConfigurationTarget } from 'vscode';


export class DRPUtils {
	public static languageFromIdentifier(language: string): string {

		return {
			"bat": "Windows Bat",
			"bibtex": "BibTeX",
			"clojure": "Clojure",
			"coffeescript": "Coffeescript",
			"c": "C",
			"cpp": "C++",
			"csharp": "C#",
			"css": "CSS",
			"dockerfile": "Dockerfile",
			"fsharp": "F#",
			"go": "Go",
			"groovy": "Groovy",
			"handlebars": "Handlebars",
			"html": "HTML",
			"ini": "Ini",
			"java": "Java",
			"javascript": "JavaScript",
			"json": "JSON",
			"latex": "LaTeX",
			"less": "Less",
			"lua": "Lua",
			"makefile": "Makefile",
			"markdown": "Markdown",
			"objective-c": "Objective-C",
			"objective-cpp": "Objective-C++",
			"perl": "Perl",
			"perl6": "Perl",
			"php": "PHP",
			"powershell": "Powershell",
			"jade": "Pug",
			"python": "Python",
			"r": "R",
			"ruby": "Ruby",
			"rust": "Rust",
			"scss": "Sass",
			"sass": "Sass",
			"shellscript": "Shell Script (Bash)",
			"sql": "SQL",
			"swift": "Swift",
			"typescript": "TypeScript",
			"tex": "TeX",
			"vb": "Visual Basic",
			"xml": "XML",
			"xsl": "XSL",
			"yaml": "YAML",
			"nothing": "Nothing"
		}[language];

	}

}