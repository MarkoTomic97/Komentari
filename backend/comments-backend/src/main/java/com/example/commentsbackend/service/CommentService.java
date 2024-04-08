package com.example.commentsbackend.service;

import com.example.commentsbackend.entity.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Comment comment);

    List<Comment> getAllComments();

    Comment editComment(Long commentId, Comment comment);

    void deleteComment(Long commentId);

}
