"use client";

import React from "react";

type Props = {
  extension: AudioType;
};

const useRecordAudio = ({ extension }: Props) => {
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const [audioBlob, setAudioBlob] = React.useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [audioFile, setAudioFile] = React.useState<File | null>(null);
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [isPermissionGranted, setIsPermissionGranted] = React.useState<boolean>(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.onstart = () => {
        setIsRecording(true);
      };

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: `audio/${extension}` });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioFile = new File([audioBlob], `audio.${extension}`, { type: `audio/${extension}` });

        setAudioBlob(audioBlob);
        setAudioUrl(audioUrl);
        setAudioFile(audioFile);
      };

      mediaRecorderRef.current.onerror = (error) => {
        setIsPermissionGranted(false);
      };

      mediaRecorderRef.current.start();

      setIsPermissionGranted(true);
    } catch (error) {
      setIsPermissionGranted(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return {
    audioBlob,
    audioUrl,
    audioFile,
    isRecording,
    startRecording,
    stopRecording,
    isPermissionGranted,
  };
};

export default useRecordAudio;
