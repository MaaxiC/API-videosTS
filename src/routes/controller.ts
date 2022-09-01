import { RequestHandler } from "express"
import videoModel from "./video" 

const createVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await videoModel.find({url: req.body.url})
        if (videoFound.length > 0) return res.status(301).json({status: "error", error: "The URL already exists"})
        const video = new videoModel(req.body)
        const savedVideo = await video.save()
        res.json(savedVideo)
    } catch (error) {
        res.status(500).json({status: "error", error: "Server error"})
    }
}

const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await videoModel.find()
        res.json(videos)
    } catch (error) {
        res.status(500).json({status: "error", error: "Server error"})
    }
}

const getVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await videoModel.findById(req.params.id)
        if (!videoFound) return res.status(204).json({status: "error", error: "Video not found"})
        res.json(videoFound)
    } catch (error) {
        res.status(500).json({status: "error", error: "Server error"})
    }
}

const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await videoModel.findByIdAndDelete(req.params.id)
        if (!videoFound) return res.status(204).json({status: "error", error: "Video not found"})
        res.json(videoFound)
    } catch (error) {
        res.status(500).json({status: "error", error: "Server error"})
    }
}

const updateVideo: RequestHandler = async (req, res) => {
    try {
        const videoUpdated = await videoModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!videoUpdated) return res.status(204).json({status: "error", error: "Video not found"})
        res.json(videoUpdated)
    } catch (error) {
        res.status(500).json({status: "error", error: "Server error"})
    }
}

export { createVideo, getVideos, getVideo, deleteVideo, updateVideo }