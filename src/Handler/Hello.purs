module Handler.Hello (hello) where

import Prelude
import Data.Argonaut.Core (Json)
import Data.Argonaut.Core as Json
import Foreign.Object as Object

hello :: String -> Json
hello name = wrapAnswer $ "Hello, " <> name <> "!"
  where
  wrapAnswer answer =
    Json.fromObject
      $ Object.fromHomogeneous { answer: Json.fromString answer }
