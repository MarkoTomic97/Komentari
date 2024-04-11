package com.example.commentsbackend.service.impl;

import com.example.commentsbackend.entity.Comment;
import com.example.commentsbackend.exception.ResourceNotFoundException;
import com.example.commentsbackend.repository.CommentRepository;
import com.example.commentsbackend.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    @Override
    public Comment createComment(Comment comment) {
        Comment savedComment = commentRepository.save(comment);
        return savedComment;
    }

    @Override
    public List<Comment> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments;
    }

    @Override
    public Comment editComment(Long commentId, Comment comment) {
        Comment findComment = commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("There isn't comment with this id"));
        findComment.setContent(comment.getContent());
        findComment.setTimestamp(comment.getTimestamp());
        Comment editedComment = commentRepository.save(findComment);
        return editedComment;
    }

    @Override
    public void deleteComment(Long commentId) {
        Comment findComment = commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("There isn't comment with this id"));
        commentRepository.delete(findComment);
    }
}
