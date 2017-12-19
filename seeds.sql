use historyDB;

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Did George Washington Have Wooden Teeth?", "No, this is not true.", 0,0 );

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Did George Pershing shoot Muslim rebels with pig?", "No, he did not.", 0,0 );

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Was the Confederacy Founded on the support and principle of slavery?", "Yes, it was.", 1,0);

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Is Franklin Delano Roosevelt the only President to serve more than two terms?", "Yes, he is.", 1,0);

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Did Thomas Jefferson have an affair with his slave, Sally Hemmings?", "Yes, he did.", 1,0);

INSERT INTO blogs (Author, Title, Post, TrueOrFalse, Visible)
VALUES("STAFF","Did Columbus discover the United States of America?", "No. It was vikings. Also, Indians.", 0,0 );

select * from blogs
