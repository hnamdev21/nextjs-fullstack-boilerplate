"use client";

import React from "react";

type Props = {
  filename: string;
  outputExtension: AudioType;
  onStart: () => void;
  onStop: () => void;
  onDataAvailable: (data: BlobEvent) => void;
  onError: (error: Event) => void;
};

const useRecordAudioCallback = ({ filename, outputExtension, onStart, onStop, onDataAvailable, onError }: Props) => {
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const [audioBlob, setAudioBlob] = React.useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [audioFile, setAudioFile] = React.useState<File | null>(null);
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [isPermissionGranted, setIsPermissionGranted] = React.useState<boolean>(false);

  const getAudioType = (extension: AudioType) => {
    return `audio/${extension}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.onstart = () => {
        setIsRecording(true);
        onStart();
      };

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
        onDataAvailable(event);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: getAudioType(outputExtension) });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioFile = new File([audioBlob], `${filename}.${outputExtension}`, {
          type: getAudioType(outputExtension),
        });

        setAudioBlob(audioBlob);
        setAudioUrl(audioUrl);
        setAudioFile(audioFile);
        onStop();
      };

      mediaRecorderRef.current.onerror = (error) => {
        setIsPermissionGranted(false);
        onError(error);
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

export default useRecordAudioCallback;
