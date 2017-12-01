<textarea type="text" class="form-control" rows="12" id="description" name="description" placeholder="Короткий опис статті" required>
              <?php echo $article['description'];?>
            </textarea>
            <script type="text/javascript">
              CKEDITOR.replace( 'description');
            </script>

            