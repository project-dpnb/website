# DPNB Webseite
Anpassungen der DPNB.de-Webseite durch das BIBA  
Demo: [dpnb.ebroda.de](http://dpnb.ebroda.de)

## Changes
* Gesamtbreite der Seite maximal 1200px
* in Hugo überführt
* Position des Logos in der Menüzeile
* Wordbrüche ermöglicht bei langen Wörtern in der Projektbeschreibung/Footer (nutze &amp;shy; um Stellen zu markieren, an denen getrennt werden darf)
* Bilder verkleinert
* Breite der Projektpartner optimiert und vereinheitlicht
* BIBA-Logo ausgetauscht
* Encoding & meta-description ergänzt
* 2 Rechtschreibfehler korrigiert
* einige Kleinigkeiten bzgl. Mobile angepasst (Spacings, etc.) 

## Struktur
Der Ordner *content* enthält die Inhalte, unter *theme/dpnb* findet sich das Layout für die Seite.

## Build process
Die Webseite wird mittels [Hugo](https://gohugo.io) gebaut. Auf [GitHub](https://github.com/gohugoio/hugo/releases) stehen Executables für alle Betriebssysteme zur Verfügung.
Diese in der passenden Version herunterladen und dann im Hauptverzeichnis des Projekts ablegen.

Die Kommandozeile/CMD/Bash/(Power)Shell in dem Verzeichnis öffnen und die hugo(.exe) ausführen. 
```
PS D:\Projekte\DPNB\Webseite\hugo\dpnb> ./hugo.exe
Building sites …
                   | EN
+------------------+----+
  Pages            | 21
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 25
  Processed images |  0
  Aliases          |  4
  Sitemaps         |  1
  Cleaned          |  0

Total in 30 ms
```

Die Webseite wird dadurch in /public/ bereitgestellt.

## Development
Für die Entwicklung bietet Hugo einen Modus mit Auto-Reload an, bei dem Änderungen an einzelnen Dateien die Webseite
komplett neu gebaut wird und diese dann auch im Browser automatisch neu geladen wird.
```
PS D:\Projekte\DPNB\Webseite\> ./hugo.exe server
Building sites …
                   | EN
+------------------+----+
  Pages            | 21
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 25
  Processed images |  0
  Aliases          |  4
  Sitemaps         |  1
  Cleaned          |  0

Total in 41 ms
Watching for changes in D:\Projekte\DPNB\Webseite\{content,data,themes}
Watching for config changes in D:\Projekte\DPNB\Webseite\config.toml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop

Change detected, rebuilding site
2019-04-26 13:44:17.145 +0200
Template changed "D:\\Projekte\\DPNB\\Webseite\\themes\\dpnb\\layouts\\partials\\header.html": CREATE
Total in 14 ms
```

Die Webseite ist dann unter der angegebenen Adresse [localhost:1313](localhost:1313) im lokalen Browser aufrufbar.

## Deployment
Um die Webseite zu deployen einfach die Webseite mit hugo bauen und den Inhalt des public-Ordners komplett auf den 
Server verschieben (z.B. mittels rsync).
```
./hugo && rsync -avp public/ user@host:/var/www/dpnb.de/
```
