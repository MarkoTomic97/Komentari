package com.example.commentsbackend.controller;

import com.example.commentsbackend.entity.Comment;
import com.example.commentsbackend.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/comments")
@AllArgsConstructor
public class CommentController {
    private CommentService commentService;

    @PostMapping()
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment){
        Comment savedComment = commentService.createComment(comment);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Comment>> getAllComments(){
        List<Comment> comments = commentService.getAllComments();

        return ResponseEntity.ok(comments);
    }

    @PutMapping("{id}")
    public ResponseEntity<Comment> editComment(@PathVariable("id") Long commentId,
                                               @RequestBody Comment comment){
        Comment editedComment = commentService.editComment(commentId, comment);

        return ResponseEntity.ok(editedComment);
    }

    @DeleteMapping("{id}")
    public String deleteComment(@PathVariable("id") Long commentId){
        commentService.deleteComment(commentId);
        return "Comment deleted";
    }
}
