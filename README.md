# Cranach Testdaten für den Frontend Development Hackday

## Prerequisites
- Docker
- Gulp
- wget

## Getting Started

### Schritt 1: Repo clonen
Im richtigen Verzeichnis auf Ihrem lokalen System das Repo clonen. Das resultierende Verzeichnis sollte wie folgt aussehen:

<pre>
Dockerfile
README.md
gulpfile.js
package-lock.json
package.json
src/
</pre>

Im `src`Verzeichnis befindet sich die Kirby Instanz.

### Schritt 2: Abhängigkeiten installieren

Nun sollten via `npm install` die notwendigen Abhängikeiten installiert werden.

## NPM Commands

### Docker Container bauen

Mit `npm run dbuild` kann der Docker Container gebaut werden.


### Docker Container starten

Mit `npm run docker` kann der Docker Container gestartet werden und damit sollte die Cranach Testversion unter [http://localhost](http://localhost) verfügbar sein. Im Docker Container läuft ein Apache Webserver mit PHP 7.2. Als DocumentRoot wird das Verzeichnis `src` in den Container eingebunden. Zum Starten und Laufen des Containers wird ein separates Terminalfenster benötigt.


### SASS Dateien kompilieren

Via `npm run watch` wird Gulp im Watchmode gestartet. Damit folgende Verzeichnisse überwacht:

<pre>
src/site/snippets/*
src/assets/scss/*
</pre>

Bei Änderungen an SCSS Dateien in dieses Verzeichnissen wird ein neues CSS File generiert und unter `assets/css/site.css` abgelegt. Zum Starten und Laufen des Watchers wird ein separates Terminalfenster benötigt.

### Statischen Mirror generieren

Via `npm run static` kann von der kompletten *dynamischen* Website ein *statischer* Spiegel generiert werden, der unter `static`abgelegt wird. Dies dauert einige Minuten. Somit haben wir eine statische Version der Website, die wir z.B. auf github.io deployen können. 

## Patternlab

Unter [http://localhost/patternlab] steht eine rudimentäre Pattern Library zur Verfügung.