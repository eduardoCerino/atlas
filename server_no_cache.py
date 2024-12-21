from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Cabeceras para deshabilitar la caché
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

PORT = 8000

if __name__ == "__main__":
    with HTTPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Servidor corriendo en http://localhost:{PORT}")
        httpd.serve_forever()
